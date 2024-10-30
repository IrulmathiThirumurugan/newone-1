from django.urls import path
from . import views

urlpatterns= [
    path("",views.login,name='login'),
    path("src/html/",views.dashboard,name='dashboard'),
    path("srp",views.srppage,name='srppage'),
    path("inventory",views.inventory,name='inventory'),
    path("aiinsights",views.aiinsights,name='aiinsights'),
    path("catalogue",views.catalogue,name='catalogue'),
     path('/download_excel', views.download_excel, name='download_excel'),
    
]