def create_dict(sort_list):
  char_count_dict = {}
  for char in sort_list:
      if char in char_count_dict:
          char_count_dict[char] += 1
      else:
          char_count_dict[char] = 1
  sorted_dict = {key: value for key, value in sorted(
      char_count_dict.items(), key=lambda item: item[1], reverse=True)}
  return sorted_dict

def create_list(sorted_dict):
    return [[key, value] for key, value in sorted_dict.items()]


def char_count(str):
    sorted_str_list = sorted(list(str.replace(" ", "")))
    sorted_dictionary = create_dict(sorted_str_list)
    sorted_list = create_list(sorted_dictionary)
    return sorted_list