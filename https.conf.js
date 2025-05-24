import fs from "fs";

export const key = fs.readFileSync('ssl/key.pem')
export const cert = fs.readFileSync('ssl/cert.pem')