#!/usr/bin/python3


def solution(want, number, discount):
    answer = 0
    cart = {product: -int(num) for (product, num) in zip(want, number)}

    for day, product in enumerate(discount):
        if day < 10:
            if product in cart:
                cart[product] += 1
            if day == 9 and all(v >= 0 for v in cart.values()):
                answer += 1
            continue

        expiredProduct = discount[day - 10]
        if expiredProduct in cart:
            cart[expiredProduct] -= 1
        if product in cart:
            cart[product] += 1

        if all(v >= 0 for v in cart.values()):
            answer += 1

    return answer


print(
    solution(
        ["banana"],
        [10],
        [
            "banana",
            "banana",
            "banana",
            "banana",
            "banana",
            "banana",
            "banana",
            "banana",
            "banana",
            "banana",
        ],
    )
)  # 0

print(
    solution(
        ["banana", "apple", "rice", "pork", "pot"],
        [3, 2, 2, 2, 1],
        [
            "chicken",
            "apple",
            "apple",
            "banana",
            "rice",
            "apple",
            "pork",
            "banana",
            "pork",
            "rice",
            "pot",
            "banana",
            "apple",
            "banana",
        ],
    )
)  # 3
