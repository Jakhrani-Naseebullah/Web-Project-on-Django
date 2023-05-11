from django.shortcuts import render,HttpResponse,redirect,get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from datetime import datetime
from myApp.models import contactus
from myApp.models import product


@login_required(login_url='login')

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def insert_contact_data(request):
    if request.method == 'POST':
        contact_model =contactus(
            name=request.POST['name'],
            email=request.POST['email'],
            country=request.POST['country'],
            message=request.POST['message']
    )
        
        contact_model.save()
        return render(request, 'contact.html')
    else:
        return render(request, 'contact.html')
    
def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('uname')
        pass1 = request.POST.get('psw')
        user = authenticate(request,username=username ,password=pass1)
        if user is not None:
            login(request,user)
            return redirect('home')
        else:
            return HttpResponse('you entered username and password incorrect')
    else:
        return render(request, 'login.html')

def registration(request):
    if request.method == 'POST':
        uname = request.POST.get('username')
        email = request.POST.get('email')
        pwd = request.POST.get('password')
        cpwd = request.POST.get('confirm_password')
        
        if pwd != cpwd:
            return HttpResponse("Your password and comfirm password are not same!")
        else:
            my_user = User.objects.create_user(uname,email,pwd)
            my_user.save()
            return redirect('login')
    
    
    
    return render(request, 'registration.html')

def logoutpage(request):
    logout(request)
    return redirect('login')

def productpage(request):
    if request.method == 'POST':
        product_model = product( product_name = request.POST['productName'],
        category = request.POST['category'],
        subcategory = request.POST['subcategory'],
        price = request.POST['price'],
        desc = request.POST['description'],
        pub_date = request.POST['publishDate'],
        image = request.POST['image']
        )
        
        product_model.save()
        return redirect('list_of_product')
        
    return render(request,'product.html')
   

def showdata(request):
    data = product.objects.all()
    return render(request,'show.html',{'data': data})

def dlte(request):
    ID = request.GET.get('id')
    product.objects.filter(product_id=ID).delete()
    return redirect('list_of_product')

def update(request):
    ID = request.GET.get('id')
    for data in product.objects.filter(product_id=ID):
        product_id = data.product_id
        product_name = data.product_name
        category = data.category
        subcategory = data.subcategory
        price = data.price
        desc = data.desc
        pub_date = data.pub_date
        image = data.image
        
    return render(request, 'update.html', {
        'id': product_id,
        'product_name': product_name,
        'category': category,
        'subcategory': subcategory,
        'price': price,
        'desc': desc,
        'pub_date': pub_date,
        'image': image
    })



def updated(request):
    if request.method == 'POST':
        product_id = request.POST.get('id')
        product_name = request.POST['productName']
        category = request.POST['category']
        subcategory = request.POST['subcategory']
        price = request.POST['price']
        desc = request.POST['description']
        pub_date = request.POST['publishDate']
        image = request.POST['image']

        product_obj = get_object_or_404(product, product_id=product_id)

        product_obj.product_name = product_name
        product_obj.category = category
        product_obj.subcategory = subcategory
        product_obj.price = price
        product_obj.desc = desc
        product_obj.pub_date = pub_date
        product_obj.image = image
        product_obj.save()

        return redirect('list_of_product')
    else:
        return HttpResponse("<h1>404 - Not Found</h1>")

        
