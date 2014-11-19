package main

import "fmt"

func quickSort(array []int) []int {

	fmt.Println(array)

	if len(array) < 2 {
		return array
	}

	pivot := array[0]
	left := make([]int, 0)
	right := make([]int, 0)

	for i := 1; i < len(array); i++ {
		if array[i] <= pivot {
			left = append(left, array[i])
		} else {
			right = append(right, array[i])
		}
	}

	fmt.Println("left", left)
	fmt.Println("pivot", pivot)
	fmt.Println("right", right)

	return append(append(quickSort(left), pivot), quickSort(right)...)
}

func main() {
	test := []int{49, 54, 98, 19, 70, 2, 23, 76, 26, 99, 6, 106, 11}
	fmt.Println(quickSort(test))
}
