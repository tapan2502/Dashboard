import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import "../componentStyles/Stats.css";

export default function Stats() {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d']; // Define your desired colors here

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className='stats'>
            <div className='Top'>
                <div class="head">
                    <p>Top Product</p>
                    <select name="" id="filterChartDta">
                        <option value="May - June 2021">May - June 2021</option>
                        <option value="June - June 2021">June - June 2021</option>
                        <option value="July - June 2021">July - June 2021</option>
                    </select>
                </div>
                <div className='Pie'>
                    <ResponsiveContainer width={400} height={400}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="Schedules">
                <div className="head">
                    <p>Today's schedules</p>
                    <p>See All <i className="fal fa-angle-right"></i></p>
                </div>
                <div className="data1">
                    <p>Meeting with suppliers from Kuta Bali</p>
                    <p><i className="fas fa-clock"></i> 14.00-15.00</p>
                    <p>at Sunset Road, Kuta, Bali </p>
                </div>
                <div className="data2">
                    <p>Check operation at Giga Factory 1</p>
                    <p><i className="fas fa-clock"></i>18.00-20.00</p>
                    <p>at Central Jakarta </p>
                </div>
            </div>
        </div>
    );
}
