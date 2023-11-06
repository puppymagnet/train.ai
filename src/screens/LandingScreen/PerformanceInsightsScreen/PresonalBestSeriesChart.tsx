import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

interface PersonalBestSeriesChartProps {
  data: any[]; // Your data format
}

const PersonalBestSeriesChart: React.FC<PersonalBestSeriesChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <Line type={'monotone'} dataKey={'weight'}/>
        <XAxis dataKey="date" />
        <YAxis dataKey="weight" domain={['auto', 'auto']} />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PersonalBestSeriesChart;