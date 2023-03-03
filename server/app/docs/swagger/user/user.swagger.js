/**
 * @swagger
 *  tags:
 *      name : User
 */

/**
 * @swagger
 * /user/get-profile:
 *  get:
 *      summary: get user profile
 *      tags: [User]
 *      description : get user profile by token
 *      parameters:
 *          -   in: header
 *              name: access-token
 *              example: Bearer YourToken...
 *      responses:
 *          200:
 *              description: success
 *          401: 
 *              description: Unauthorization
 */

/**
 * @swagger
 *  /user/update-profile:
 *      post:
 *          tags: [User]
 *          summary: update user profile
 *          description: update user first name last name and bio
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              firstName:
 *                                  type: string
 *                              lastName:
 *                                  type: string
 *                              bio:
 *                                  type: string
 *          responses:
 *              200: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              500: 
 *                  description: Internal Server Error 
 */

/**
 * @swagger
 *  /user/update-profile-image:
 *      post:
 *          tags: [User]
 *          summary: update user profile image
 *          description: update user profile image with file ( png, svg, jpg, jpeg, gif... )
 *          requestBody:
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              image:
 *                                  type: file
 *                                  format: binary
 *          responses:
 *              200: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              500: 
 *                  description: Internal Server Error 
 */

/**
 * @swagger
 * /user/delete-profile-image:
 *  get:
 *      summary: remove user profile image
 *      tags: [User]
 *      description : remove user profile image
 *      parameters:
 *          -   in: header
 *              name: access-token
 *              example: Bearer YourToken...
 *      responses:
 *          202:
 *              description: ACCEPTED 
 *          406: 
 *              description: NOT_ACCEPTED
 */