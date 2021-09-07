import controller from "./user_controller";
import type {Request, Response} from 'express';


describe('Get Employees', () => {
    afterAll(() => {
        jest.resetAllMocks();
    });
    it('should pass', async () => {
        const mReq = ({} as unknown) as Request;
        const mRes = ({status: jest.fn().mockReturnThis(), json: jest.fn()} as unknown) as Response;
        await controller.getUsers(mReq, mRes);
        expect(mRes.status).toBe(200);

    });
});