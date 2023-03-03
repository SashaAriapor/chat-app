const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

function swaggerConfig(app, PORT) {
    app.use(
        "/api-doc",
        swaggerUI.serve,
        swaggerUI.setup(
            swaggerJsDoc({
                swaggerDefinition: {
                    openapi: "3.0.0",
                    info: {
                        title: "chat app",
                        version: "1.0.0",
                        description: "",
                        contact: {
                            name: "Sasha Ariapor",         
                            email: "SashaAriapor@gmail.com"
                        },
                    },
                    server: [
                        {
                            url: `http://localhost:${PORT}`
                        }
                    ],
                    components: {
                        securitySchemes : {
                            BearerAuth: {
                                type: "http",
                                scheme: "bearer",
                                bearerFormat: "JWT",  
                            }
                        }
                    },
                    security : [{BearerAuth : [] }]
                },
                apis: ["./app/docs/swagger/**/*.js"],
            }),
            {explorer: true}
        )
    )
}

module.exports = {
    swaggerConfig
}