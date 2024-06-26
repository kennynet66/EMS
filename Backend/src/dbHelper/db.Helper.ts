import * as sql from "mssql";
import dotenv from "dotenv";
import { sqlConfig } from "../Config/sql.config";

dotenv.config();

const pool = new sql.ConnectionPool(sqlConfig);

const poolConnect = pool.connect();

export async function query(queryString: string): Promise<sql.IResult<any>> {
    await poolConnect;

    try {
        const request = new sql.Request(pool);
        const result = await request.query(queryString);
        return result;
    } catch (error) {
        throw new Error(`Error executing SQL query: ${error}`);
    }
}

export const execute = async (
    procedureName: string,
    params: { [key: string]: any } = {}
) => {
    await poolConnect;

    try {
        const request = new sql.Request(pool);

        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                request.input(key, params[key]);
            }
        }

        const result = await request.execute(procedureName);
        return result;
    } catch (error) {
        throw new Error(`Error executing stored procedure: ${error}`);
    }
};

// `EXEC ${procedureName}` use when runiing stored procedure without params

// to use with params
// const procedureName = 'MyProcedureWithParams'; // Replace with your actual procedure name
//   const params = {
//     Param1: 'Value1',
//     Param2: 'Value2',
//     // Add more parameters as needed
//   };
//     const result = await execute(procedureName, params);