import User from "../models/userModel.js";

const getUsersService = async() => {
    return await User.find();
}

const getUserService = async (id) => {
    const user = await User.findById(id);
    if(!user){
        throw new Error('User not found');
    }
    return user;
}

const createUserService = async (userData) => {
    if(await User.findOne({email: userData.email})){
        throw new Error('Email already taken');
    }
    const newUser = new User(userData);
    return await newUser.save();
}

const updateUserService = async (id, userData) => {
    const updatedUser = await User.findByIdAndUpdate(id, userData,{ new: true });
    if(!updatedUser){
        throw new Error('User not found');
    }
    return updatedUser;
}

const deleteUserService = async (id) => {
    const deletedUser = await User.findByIdAndDelete(id);
    if(!deletedUser){
        throw new Error('User not found');
    }
    return deletedUser;
}

export { getUsersService, getUserService, createUserService, updateUserService, deleteUserService };