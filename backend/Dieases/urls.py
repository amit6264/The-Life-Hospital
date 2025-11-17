from django.urls import path

from . import views

urlpatterns = [
    path("/list/", views.allDieases),
    path('/update/<int:id>',views.update_Dieases),
    path('/delete/<int:id>',views.delete_Dieases)

]
