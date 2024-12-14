import { json } from "@sveltejs/kit";


export async function POST({ request, cookies }){
    const data = await request.json();
    // Process the data here
    return json({
        status: 200,
        body: {
            message: 'Request processed successfully',
            data: data.test,
        }
    });
};