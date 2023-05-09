const router=require('express').Router();
const userController=require('../../../../controllers/apiController');
router.get('/events',userController.getUser);
router.post('/events',userController.postUser);
router.put('/events/:id',userController.updateUser);
router.delete('/events/:id',userController.deleteUser);
module.exports=router;