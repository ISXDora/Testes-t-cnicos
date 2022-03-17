const path = require('path') //Recurso que auxilia uso de barra independente do SO
const HtmlwebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    // entry:'src/index.jsx' ==> Sem o uso do path
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'), // Arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'dist'), //Arquivos convertidos
        filename: 'bundle.js'
    }, 
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlwebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ].filter(Boolean),
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Arquivos que trabalham no código
    },
    devServer: {
        static: './dist',
        hot: true,
      },
    module: { //insere as regras de tratamento 
        rules: [ // recebe um array de objetos
            { //um objeto para cada tipo de arquivo a ser tratado
                test: /\.(j|t)sx$/, // através de expressão regular caça os arquivos com essa extensão
                exclude: /node_modules/, //por padrão os arquivos cada biblioteca é responsável por seu arquivo de build, daí vamos excluir essa possibilidade.
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean),
                    }
                }
            },
            {
                test: /\.scss$/, 
                exclude: /node_modules/, 
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
}