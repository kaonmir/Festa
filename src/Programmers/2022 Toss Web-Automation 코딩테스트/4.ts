type _Response = {
  code: number;
  header: Record<string, string>;
  body: string;
};

type _Request = (url: string) => Promise<_Response>;

const response: _Response = {
  code: 302,
  header: {
    "...": "...",
    location: "www.naver.com",
  },

  body: "api response",
};

async function solution(
  request: _Request,
  targetUrl: string
): Promise<_Response> {
  const response = await request(targetUrl);

  // if redirect code 301 302 303 307 308
  if (
    response.code === 301 ||
    response.code === 302 ||
    response.code === 303 ||
    response.code === 307 ||
    response.code === 308
  ) {
    return solution(request, response.header.location);
  }
  return response;
}
