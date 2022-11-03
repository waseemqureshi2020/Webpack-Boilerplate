import { resolve } from 'path';

export const entry = './src/index.js';
export const output = {
    filename: 'main.js',
    path: resolve(__dirname, 'dist'),
};
export const plugins = [
    new HtmlWebpackPlugin({
        title: 'Output Management',
        template: './src/index.html',
    }),
];
