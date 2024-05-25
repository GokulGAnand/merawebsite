import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { Params } from '../type';
import { MODEL } from '../endpoints';

const GET = async (req: NextRequest) => {
  const params = Object.fromEntries(req.nextUrl.searchParams.entries());
  try {
    const response = await axios.get(MODEL, {
      params,
      headers: {
        'Cache-Control': 'max-age=3600', // Cache header for optimization
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching data: ', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
};

export { GET };
