def quick_sort(arr, left = 0, right = arr.length-1)
  return nil if left > right

  pivot_idx = partition(arr, left, right)
  quick_sort(arr, left, pivot_idx - 1)
  quick_sort(arr, pivot_idx + 1, right)
end

def partition(arr, left, right)
  current_idx = left + 1
  pivot = left
  while (current_idx < right)
    if (arr[current_idx] < arr[pivot])
      arr[current_idx], arr[pivot] = arr[pivot], arr[current_idx]
      pivot += 1
    end
    current_idx += 1
  end
  pivot
end

arr = [4, 5, 10, 49, 32, 2]
p quick_sort(arr)
