countries = {
    "USA": {"California": ["Los Angeles", "San Francisco", "San Diego"]},
    "India": {"Maharashtra": ["Mumbai", "Pune", "Nagpur"]},
    "Canada": {"Ontario": ["Toronto", "Ottawa", "Mississauga"]},
    "Australia": {"New South Wales": ["Sydney", "Newcastle", "Wollongong"]}
}

# q-1
def list_countries():
    print("countries:"," ,".join(countries.keys()))
list_countries()

# q-2

# def sorted_cities():
#     country =input("enter country:")
#     state =input("enter state:")
#     print("sorted cities:",",".join(sorted(countries.get(country,{}).get(state,[]))))
# sorted_cities()

def sorted_cities():
    country = input("Enter country: ")
    state = input("Enter state: ")
    print("Sorted Cities:", ", ".join(sorted(countries.get(country, {}).get(state, []))))
sorted_cities()