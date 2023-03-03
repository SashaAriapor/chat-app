/**
 * @swagger
 *  tags:
 *      name : UserAuthentication
 */

/**
 * @swagger
 *  /auth/get-otp:
 *      post:
 *          tags: [UserAuthentication]
 *          summary: get code for login with phone number
 *          description: send otp code
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              phoneNumber:
 *                                  type: string
 *          responses:
 *              200: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              429: 
 *                  description: To Many Request
 *              500: 
 *                  description: Internal Server Error 
 */


/**
 * @swagger
 *  /auth/check-otp:
 *      post:
 *          tags: [UserAuthentication]
 *          summary: sned code and phone number for login or register
 *          description: one time password login or register
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              phoneNumber:
 *                                  type: string
 *                              code:
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
