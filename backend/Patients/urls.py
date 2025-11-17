from django.urls import path

from . import views

urlpatterns = [
    path("/list", views.allPatients),
    path('/update/<int:id>',views.update_Patient),
    path('/delete/<int:id>',views.delete_Patient),
  
]
