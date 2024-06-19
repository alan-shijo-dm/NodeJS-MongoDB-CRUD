import { createUserService, deleteUserService, getUserService, getUsersService, updateUserService } from "../services/userService.js";

const getAllUsers = async (req, res) => {
    try{
        const users = await getUsersService();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
const getUser = async (req, res) => {
    try {
        const user = await getUserService(req.params.id);
        res.json(user);
    } catch (error) {
        if(error.name === 'CastError'){
            return res.status(400).json({message: 'Invalid ID'});
        }
        res.status(500).json({ message: error.message });
    }
}

const createUser = async (req, res) => {
    try{
        const newUser = await createUserService(req.body);
        res.json(newUser);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

const updateUser = async (req, res) => {
    try{
        const updatedUser = await updateUserService(req.params.id, req.body);
        res.json(updatedUser);
    } catch (error) {
        if(error.codeName){
            return res.status(400).json({message: 'Email already taken'})
        }
        res.status(500).json({message: error.message});
    }
}

const deleteUser = async (req, res) => {
    try{
        const deletedUser = await deleteUserService(req.params.id);
        res.json(deletedUser);
    }catch(error){
        if(error.name === 'CastError'){
            return res.status(400).json({message: 'Invalid ID'});
        }
        res.status(500).json({message: error.message});
    }
}

export { getAllUsers, getUser, createUser, updateUser, deleteUser }