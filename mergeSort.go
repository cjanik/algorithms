package main

import (
	"fmt"
)

func mergeSort(list []int) []int {

	if len(list) < 2 {
		return list
	}

	mid := int(len(list) / 2)
	left := list[:mid]
	right := list[mid:]

	return merge(mergeSort(left), mergeSort(right))
}

func merge(left []int, right []int) []int {

	result := make([]int, 0)

	var m, n int = 0, 0

	for m < len(left) && n < len(right) {
		// fmt.Println(m, n)
		if left[m] <= right[n] {
			result = append(result, left[m])
			m++
		} else {
			result = append(result, right[n])
			n++
		}
	}

	for m < len(left) {
		result = append(result, left[m])
		m++
	}

	for n < len(right) {
		result = append(result, right[n])
		n++
	}

	return result

}

func main() {
	test := []int{49, 54, 98, 19, 70, 2, 23, 76, 26, 99, 6, 106, 11}
	fmt.Println(mergeSort(test))
}
