# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# pseudo code: 
# create a method named even or odds
# input: number
# output: string saying "'num' is odd or even"
# process: declare a function with a number as a parameter
# use the method .even? and .odd? to check parameters divisibility by 2
# print a string saying whether the parameter is even or odd
# use string interpolation on the return

def evens_or_odds(num)
  if num.even?
    p "#{num} is even"
  else num.odd?
    p "#{num} is odd"
  end
end
evens_or_odds(num1)
evens_or_odds(num2)
evens_or_odds(num3)




# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# create a method
# input: string
# expected output: string with the vowels removed
# process: use .delete with vowels provided in the argument to delete from each parameter

def vowel_deleter(string)
  p string.delete('aeiouAEIOU')
end
vowel_deleter(beatles_album1)
vowel_deleter(beatles_album2)
vowel_deleter(beatles_album3)


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# pseudo code:
# create a method named palindrome_method
# input: string
# input: string notifying user whether or not the string is a palindrome
# process: use conditional
# use methods .downcase to check for edgecases
# use .reverse to check if string is a palindrome
# return a string notifying whether string was a palindrome
# use string interpolation providing the parameter 

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_method(string)
  if string.downcase == string.downcase.reverse
    p "#{string} is a palindrome"
  else
    p "#{string} is not a palindrome"
  end
end

palindrome_method(palindrome_tester1)
palindrome_method(palindrome_tester2)
palindrome_method(palindrome_tester3)