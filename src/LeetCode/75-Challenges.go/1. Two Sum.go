package main

import "fmt"

func twoSum(nums []int, target int) []int {
	for i, a := range nums {
		k := target - a
		for j := i + 1; j < len(nums); j++ {
			if k == nums[j] {
				return []int{i, j}
			}
		}
	}
	return []int{0, 0}
}

func main() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9)) // [0,1]
	fmt.Println(twoSum([]int{3, 2, 4}, 6))      // [1,2]
	fmt.Println(twoSum([]int{3, 3}, 6))         // [0,1]
}
