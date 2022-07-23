#!/usr/bin/python3
from itertools import repeat


def solution(X: str, Y: str):
    # range 9 to 0
    answer = ""
    for i in range(9, -1, -1):
        num = min(X.count(str(i)), Y.count(str(i)))
        answer += "".join(repeat(str(i), num))

    if answer == "":
        answer = "-1"
    if answer[0] == "0" and answer[1] == "0":
        answer = "0"
    return answer


print(solution("100", "2345"))  # -1
print(solution("100", "203045"))  # 0
print(solution("100", "123450"))  # 10
