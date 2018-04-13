def binary_search(arr, value)
  return nil if (arr.length < 1)
  mid = arr.length / 2

  if (value < arr[mid])
    return binary_search(arr[0...mid], value)
  elsif (value > arr[mid])
    result = binary_search(arr[mid+1..-1], value)
    return result == nil ? nil : result + mid + 1
  else
    return mid;
  end
end

arr = [1,2,3,4,5,6,7,8]
p binary_search(arr, 7)
p binary_search(arr, 1)
p binary_search(arr, 4)
p binary_search(arr, 10)
