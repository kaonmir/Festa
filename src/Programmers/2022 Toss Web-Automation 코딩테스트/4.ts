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

const redirectCodes = [301, 302, 303, 307, 308];

async function solution(
  request: _Request,
  targetUrl: string
): Promise<_Response> {
  const response = await request(targetUrl);

  // if redirect code 301 302 303 307 308
  if (redirectCodes.includes(response.code)) {
    return solution(request, response.header.location);
  }
  return response;
}
