import {NextFunction, Request, Response} from 'express';
import axios, {AxiosResponse} from 'axios';
import {Employees} from "../util/misc";
import Employee from "../services/Employee";


const getUsers = async (req: Request, res: Response) => {


    const promises = Employees.map(async (user) => {
        return await Employee.getEmployee(user.country, user);
    });


    const results = await Promise.all(promises)


    return res.status(200).json({
        error: false,
        results
    })
};




export default {getUsers};