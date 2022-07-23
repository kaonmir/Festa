#!/usr/bin/python3
# append, pop, [-1]


def solution(order: list):
    n = len(order)
    stack: list = []

    target = 0
    answer = 0
    for product in range(1, n + 1):
        if product == order[target]:
            target += 1
            answer += 1
        else:
            stack.append(product)

        while len(stack) != 0 and stack[-1] == order[target]:
            stack.pop()
            target += 1
            answer += 1

    return answer


print(solution([5, 4, 3, 2, 1]))  # 5
print(solution([4, 3, 1, 2, 5]))  # 2
