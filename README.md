How to get started:

-Pull master
-Navigate CLI to root folder
-Run npm install to get node-modules


Conventions:

CSS:
    Class naming: 'componentNameCamelCase-classNameCamelCase' this will avoid having the same name across .css files 
        (they're all joined up when the project is built)
    All compontent css should go in its own file
    All animations should go in App.css 

JSX:
    Pascel case .jsx files
    Inside folder with the same name and css file
    Example JSX object: 
        export const ActionButton = (params) => {
            const {prop1, prop2, prop3} = params;

            //Javascript stuff if needed
           
            return (
                <pageElement>
                    //Content
                </pageElement>
            );
        }
        This will make them uniform and I think easier to read

Javascript:
    Just follow best practices         
    
        
Links to dependency docs:

-React Router - https://reactrouter.com/en/main/start/overview