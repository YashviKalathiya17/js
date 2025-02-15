#-------------#
# list1=["hello yashvi"]
# list2=[1,2,3,4,5,6,7,8]
# list3=[True,False,True]
# print(list1)
# print(list2)
# print(list3)

#--------------#
# abc=[1,2,3,"yashvi","abc",False]
# print(type(abc))
# print(abc)

#--------------#
# thislist=list(("yashvi","tameta","batata","algorithm","of","this","fundamentals","isit","?"))
# print(thislist[-4:-1])
#output: ['this', 'fundamentals', 'isit']

# ------------#
# thislist=["apple","banana","berry","mango"]
# if "mango" in thislist:
#     print(True)
# else:
#     print(False)
# ------------#

#-------------#
# thislist=["banana","cherry"]
# thislist[0]="blueberry"
# print(thislist)
# output:['blueberry', 'cherry']
#--------------#

#--------------#
# thislist=["apple","ndf","sbd","Sba","bha","bad","abs","aVJH"]
# thislist[1:3]=["ew"]
# print(thislist)
#--------------#

#--------------#
# thislist=["fsh","id","duw"]
# thislist.insert(2,"water")
# print(thislist)
#--------------#

#--------------#
# lists=["er","pr","cr"]
# lists.append("gr")
# print(lists)
#--------------#

#--------------#
# this=["bs","baa","as"]
# list=["tr","rw","ws"]
# this.extend(list)
# print(this)
# --output:['bs', 'baa', 'as', 'tr', 'rw', 'ws']
#--------------#

#-------delete one elemenet--------#
# list=["opoo","vivo","realme"]
# list.pop(1)
# print(list)
#---------------#

#--------delete all items-------#
# list=["opoo","vivo","realme"]
# del list
#----------------------#

#----------------#
# thislist=["bsdz","bsdd","fwa"]
# for x in thislist:
#     print(x)

#----------------#
thislist=["apple","banana","cherry"]
# for i in range(len(thislist)):
#     print(thislist[i])
# i=0
# while i<len(thislist):
#     print(thislist[i])
#     i=i+1
# [print (x) for x in thislist]
thislist.sort(reverse=True)
print(thislist)