// components/SkillWidget.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { Engine, Render, Runner, World, Bodies, Body, Events } from 'matter-js';

interface SkillWidgetProps {
    skills?: string[];
    backgroundColor?: string;
    textColor?: string;
    pillColor?: string;
    gravity?: number;
    className?: string;
}

const defaultSkills = [
    "⚛️React",
    "Vue",
    "🟢Node.js",
    "Express",
    "#️⃣TypeScript",
    "#️⃣JavaScript",
    "🍃MongoDB",
    "⛃ PostgreSQL",
    "LLM",
    "🤖AI",
    "OpenAI API",
    "☁ AWS",
    "👨‍💻",
    "😀",
    "🚀",
];

const SkillWidget = ({
    skills = defaultSkills,
    backgroundColor = 'transparent',
    textColor = '#ffffff',
    pillColor = '#111',
    // pillColor = '#ffffff08',
    gravity = 1,
    className = '',
}: SkillWidgetProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const bodiesRef = useRef<Matter.Body[]>([]);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Resize observer to track container size changes
    useEffect(() => {
        if (!containerRef.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                setDimensions({ width, height });
            }
        });

        resizeObserver.observe(containerRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0 || dimensions.height === 0) return;

    // Setup Matter.js
    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    canvas.style.width = dimensions.width + 'px';
    canvas.style.height = dimensions.height + 'px';

        const engine = Engine.create();
        engineRef.current = engine;
        engine.world.gravity.y = gravity;

        const runner = Runner.create();
        Runner.run(runner, engine);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset any existing transforms
    ctx.scale(dpr, dpr);

        // Create skill bodies
        const bodies = skills.map((skill) => {
            ctx.font = "14px sans-serif";
            let textWidth = ctx.measureText(skill).width + 50; // padding
            if (textWidth < 100) textWidth = 50;

            const height = 40;

            const body = Bodies.rectangle(
                Math.random() * dimensions.width,
                0, // drop from above
                textWidth,
                height,
                {
                    restitution: 0.5,
                    friction: 0.3,
                    render: { fillStyle: pillColor },
                    label: skill,
                }
            );

            // Save original size for rendering
            (body as SkillBody).renderWidth = textWidth;
            (body as SkillBody).renderHeight = height;

            return body as SkillBody;
        });

        bodiesRef.current = bodies;
        World.add(engine.world, bodies);

        // Type for skill body with extra renderWidth/renderHeight
        type SkillBody = Matter.Body & { renderWidth: number; renderHeight: number };

        // Create walls
        const thickness = 50;
        const ground = Bodies.rectangle(
            dimensions.width / 2,
            dimensions.height + thickness / 2,
            dimensions.width,
            thickness,
            { isStatic: true }
        );
        const leftWall = Bodies.rectangle(
            -thickness / 2,
            dimensions.height / 2,
            thickness,
            dimensions.height,
            { isStatic: true }
        );
        const rightWall = Bodies.rectangle(
            dimensions.width + thickness / 2,
            dimensions.height / 2,
            thickness,
            dimensions.height,
            { isStatic: true }
        );
        World.add(engine.world, [ground, leftWall, rightWall]);

        // Custom render loop
        const renderLoop = () => {
            if (!ctx || !canvasRef.current) return;

            ctx.clearRect(0, 0, dimensions.width, dimensions.height);

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "14px sans-serif";

            bodies.forEach((body) => {
                const skillBody = body as SkillBody;
                const { position, angle } = skillBody;
                const skill = skillBody.label;
                // Draw pill background with fixed size
                const width = skillBody.renderWidth;
                const height = skillBody.renderHeight;

                ctx.save();
                ctx.translate(position.x, position.y);
                ctx.rotate(angle);

                // Set shadow before drawing pill
                ctx.shadowColor = "rgba(255, 255, 255, 0.3)"; // shadow color
                ctx.shadowBlur = 4;                     // how soft the shadow is
                ctx.shadowOffsetX = 1;                  // horizontal offset
                ctx.shadowOffsetY = -1;                  // vertical offset

                // Draw pill background
                const radius = height / 2;
                ctx.fillStyle = pillColor;
                ctx.beginPath();
                ctx.moveTo(-width / 2 + radius, -height / 2);
                ctx.lineTo(width / 2 - radius, -height / 2);
                ctx.arc(width / 2 - radius, 0, radius, -Math.PI / 2, Math.PI / 2);
                ctx.lineTo(-width / 2 + radius, height / 2);
                ctx.arc(-width / 2 + radius, 0, radius, Math.PI / 2, -Math.PI / 2);
                ctx.fill();

                // Reset shadow so text isn't blurred
                ctx.shadowColor = "transparent";
                ctx.shadowBlur = 0;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;

                // // --- Border ---
                // ctx.strokeStyle = "#ffffff0b"; // border color
                // ctx.lineWidth = 2;           // border thickness
                // ctx.beginPath();
                // ctx.moveTo(-width / 2 + radius, -height / 2);
                // ctx.lineTo(width / 2 - radius, -height / 2);
                // ctx.arc(width / 2 - radius, 0, radius, -Math.PI / 2, Math.PI / 2);
                // ctx.lineTo(-width / 2 + radius, height / 2);
                // ctx.arc(-width / 2 + radius, 0, radius, Math.PI / 2, -Math.PI / 2);
                // ctx.stroke();

                // Draw text
                ctx.fillStyle = textColor;
                ctx.fillText(skill, 0, 0);

                ctx.restore();
            });

            requestAnimationFrame(renderLoop);
        };

        renderLoop();

        // Click to bounce
        const handleClick = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            bodiesRef.current.forEach((body) => {
                const dx = body.position.x - mouseX;
                const dy = body.position.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 80) {
                    Body.applyForce(body, body.position, { x: 0, y: -0.05 });
                }
            });
        };

        canvas.addEventListener('click', handleClick);

        // Cleanup
        return () => {
            canvas.removeEventListener('click', handleClick);
            Runner.stop(runner);
            World.clear(engine.world, false);
            Engine.clear(engine);
        };
    }, [dimensions, skills, pillColor, textColor, gravity]);

    return (
        <div
            ref={containerRef}
            style={{
                width: '100%',
                height: '100%',
                backgroundColor,
                position: 'relative',
                overflow: 'hidden'
            }}
            className={className}
        >
            <canvas
                ref={canvasRef}
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    );
};

export default SkillWidget;