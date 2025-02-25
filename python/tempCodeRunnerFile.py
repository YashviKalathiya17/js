def sorted_cities():
    country =input("enter country:")
    state =input("enter state:")
    print("sorted cities:",",".join(sorted(countries.get(country,{}).get(state,[]))))
sorted_cities()