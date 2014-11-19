package main

import "fmt"

func insertionSort(list []int) []int {

	for i := 0; i < len(list); i++ {
		var j int
		value := list[i]
		for j = i - 1; j > -1 && list[j] > value; j-- {
			list[j+1] = list[j]
		}
		list[j+1] = value
	}

	return list
}

func main() {
	test := []int{49, 54, 98, 19, 70, 2, 23, 76, 26, 99, 6, 106, 11}
	fmt.Println(insertionSort(test))
}
