import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { BiBorderAll, BiBorderRight } from 'react-icons/bi';
import { styleText } from 'util';

const SkillChart = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const chart = echarts.init(chartRef.current);

        const stripeCanvas = document.createElement('canvas');
        stripeCanvas.width = 10;
        stripeCanvas.height = 10;

        const ctx = stripeCanvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.strokeStyle = 'rgba(255,255,255,0.1)'; // Stripe color + transparency
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 10);
        ctx.lineTo(10, 0);
        ctx.stroke();

        const option = {
            xAxis: {
                type: 'value',
                splitLine: { show: false },
                axisLabel: { show: false }
            },
            yAxis: {
                type: 'category',
                data: ['React', 'Express', 'AWS', 'MongoDB', 'PostgreSQL', 'Node.js', 'TypeScript', 'Vue', 'OpenAI API'],
                inverse: true,
                axisLabel: {
                    color: '#fff',
                },
                axisLine: {
                    show: false
                },
            },
            series: [
                {
                    type: 'bar',
                    data: [
                        { value: 100, name: 'React' },
                        { value: 90, name: 'Express' },
                        { value: 85, name: 'AWS' },
                        { value: 88, name: 'MongoDB' },
                        { value: 85, name: 'PostgreSQL' },
                        { value: 88, name: 'Node.js' },
                        { value: 88, name: 'TypeScript' },
                        { value: 85, name: 'Vue' },
                        { value: 80, name: 'OpenAI API' }
                    ],
                    label: {
                        show: true,
                        position: 'right',
                    },
                    itemStyle: {
                        color: 'oklch(0.714 0.203 305.504)', // Green color for the bars
                        borderColor: 'oklch(0.714 0.203 305.504)',
                        opacity: 0.8,
                        borderWidth: 1,
                        barBorderRadius: 5,
                    },
                    showBackground: true,
                    backgroundStyle: {
                        color: {
                            image: stripeCanvas,
                            repeat: 'repeat',
                        },
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 2, // Only right border
                        borderType: 'solid',
                        borderRadius: 5,
                    },
                },


            ],
        };

        chart.setOption(option);

        return () => {
            chart.dispose();
        };
    }, []);

    return <div ref={chartRef} className="w-full h-full"></div>;
}

export default SkillChart;