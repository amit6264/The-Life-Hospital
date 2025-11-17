from django.urls import path

from . import views

urlpatterns = [
    path("/list", views.allDoctors),
    path('/update/<int:id>',views.update_Doctor),
    path('/delete/<int:id>',views.delete_Doctor),
  
]
