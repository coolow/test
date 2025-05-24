import express, { Request } from "express";

const app = express();

/**
 * 判断是否是自引用对象
 * @param value 待判断的值
 */
function isSelfRefObj(value: object): boolean {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    return Object.values(value).some((value) => value === value);
}

/**
 * 过滤非内部属性、非自引用属性
 * @param req 请求对象
 */
function filterReq(req: Request) {
    return Object.fromEntries(
        Object.entries(req)
            .filter(([key, value]) => !key.startsWith('_') && !isSelfRefObj(value))
    );
}

app.get('/foo', (req, res) => {
    const data = filterReq(req)
    console.log(data);
    res.send(data);
})
app.listen(3000, () => {
    console.log("http://localhost:3000");
})

