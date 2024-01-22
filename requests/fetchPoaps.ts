import { POAPEvent } from "../ts/types";

export const fetchPoapData = async (): Promise<any> => {

    const poapAPIKey = process.env.NEXT_PUBLIC_POAP_API_KEY;

    if (!poapAPIKey) {
        throw new Error('POAP API key is not defined');
    }

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'x-api-key': poapAPIKey
        }
    };

    try {
        const response = await fetch('https://api.poap.tech/actions/scan/0x4df30AF0237E9a5c29D0f49a18Cb6f46692e3c71', options)
        const data = await response.json();
        let poaps: POAPEvent[] = [];
        for (let i = 0; i < data.length; i++) {
            poaps.push(data[i]);
        }
        return data;
    } catch (error) {
        console.error(error);
    }
}