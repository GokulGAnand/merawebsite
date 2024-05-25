import axios from 'axios';
import { NextRequest } from 'next/server';
import { Params } from '../type';
import { VARIANT } from '../endpoints';

const GET = async (req: NextRequest) => {
  const params = Object.fromEntries(req.nextUrl.searchParams.entries());
  try {
    const response = await axios.get(VARIANT, {
      params,
      headers: {
        'Cache-Control': 'max-age=3600', // Cache header for optimization
      },
    });
    return Response.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return Response.json({ error: 'Error fetching data' }, { status: 500 });
  }
};

export { GET };
