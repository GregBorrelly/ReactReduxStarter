import React from 'react'
import './documentation.scss'
import Codeblock from 'react-uikit-codeblock';
import ImgError from './error.png';



export default (props) => {

    return (

        <div>
            <header>
                <h1>React & Redux Starter</h1>
                <h2> DOCUMENTATION</h2>
            </header>
            <main>


                <section className="" id="structure">
                    <h1>WHY I CREATED THIS PROJECT</h1>
                    <p>Work with React long enough, and you will grow tired of setting up all the tooling that is necessary to create an App. We do have some good options nowadays, such as create-react-app.  But I still feel like we can do a bit better.  That's why I was inspired to create this project. </p>

                    <p>It includes:</p>
                        <ul>
                            <li>React & Redux</li>
                            <li>React Router</li>
                            <li>Hot Reloading</li>
                            <li>Better Error Handling</li>
                            <li>Flexible Structure</li>
                        </ul>
                    <h1>PROJECT STRUCTURE</h1>

                    <p>The project structure is fairly common. We have a config directory which holds the webpack config. The /dist directory holds our builds. /src directory has all our code. </p>
                    <Codeblock>
                        {` 
                            /config
                                ..webpack.dev.js 
                            /dist 
                            /src
                                /assets
                                /actions
                                /components
                                /containers
                                /reducers
                                index.html
                                main.css
                                main.js
                                main.scss
                            .babelrc
                            package.json

                        `}
                    </Codeblock>


                </section>
                <section className="" id="commands">
                    <h1>COMMANDS</h1>

                    <p>You can pretty much get by with the following three commands.</p>

                    Install dependencies
                    <Codeblock>
                        {` 
                          npm install

                        `}
                    </Codeblock>

                    To start the live server:

                    <Codeblock>
                        {` 
                          npm start

                        `}
                    </Codeblock>

                    To create a static Build"

                    <Codeblock>
                        {` 
                          npm build

                        `}
                    </Codeblock>

                </section>
                <section >
                    <h1>SASS</h1>
                    <p>Our CSS gets taken care of in this section.</p>
                    <Codeblock>
                        {` 
                        {
                            test: /\.scss$/,
                            use: [
                                {
                                    loader:"style-loader"
                                },
                                {
                                    loader:"css-loader"
                                },
                                {
                                    loader:"sass-loader"
                                }
            
            
                            ]
                        }`};
                    </Codeblock>

                </section>
                <section >
                    <h1>Errors</h1>
                    <img src={ImgError} alt="" />
                    <p>Instead of looking through our terminal everytime we find an error. We are using Webpack's devServer option Overlay. Overlay displas the current error on your browser. As you can see this give us a nice error message, rigth on the browser so we can save time.</p>

                    <p>The feature can be easily turned on and off by adding an overlay property to the devServer and setting it to true.</p>
                    <Codeblock>
                        {` 
                               devServer: {
                                contentBase: "dist",
                                overlay: true,
                                port:6115
                            }
                        `}
                    </Codeblock>
                </section>

                <section >
                    <h1>Hot Reloading</h1>
                    <p>This starter project supports hot reloading off the bat. The project will reload whenever files with the folowing extension are updated.</p><ol>
                        <li>HTML</li>
                        <li>JS</li>
                        <li>CSS/SCSS</li>
                    </ol>
                </section>

                <section >
                    <h1>PACKAGES</h1>
                    <Codeblock>
                        {` 
                          "dependencies": {
                            "axios": "^0.17.1",
                            "babel-core": "^6.26.0",
                            "babel-plugin-transform-runtime": "^6.23.0",
                            "babel-preset-env": "^1.6.1",
                            "css-loader": "^0.28.9",
                            "extract-loader": "^1.0.2",
                            "file-loader": "^1.1.6",
                            "html-loader": "^0.5.5",
                            "node-sass": "^4.7.2",
                            "react": "^16.2.0",
                            "react-dom": "^16.2.0",
                            "react-hot-loader": "^4.0.0-beta.16",
                            "react-redux": "^5.0.6",
                            "react-router": "^4.2.0",
                            "react-uikit-codeblock": "^2.0.2",
                            "redux": "^3.7.2",
                            "sass-loader": "^6.0.6",
                            "style-loader": "^0.19.1"
                          },
                          "devDependencies": {
                            "babel-loader": "^7.1.2",
                            "babel-preset-es2015": "^6.24.1",
                            "babel-preset-react": "^6.24.1",
                            "webpack": "^3.10.0",
                            "webpack-dev-server": "^2.11.1"
                          }

                        `}
                    </Codeblock>

                </section>
                <section >
                    <h1>CONTACT</h1>
                    <p>Any questions, you can contact me at: </p>
                    <a href="">gregborrelly@gmail.com</a>
                </section>
            </main>
            <aside>
                <ul>
                    <h3>Main</h3>
                    <li> <a href="#structure">Structure</a>    </li>
                    <li> <a href="#commands">Commands</a>    </li>

                    <h3>Features</h3>
                    <li>Errors</li>
                    <li> <a href="#structure">Hot Reloading</a>    </li>
                    <li>Versions</li>
                    <li>Contact</li>
                </ul>
            </aside>



        </div>
    )
}