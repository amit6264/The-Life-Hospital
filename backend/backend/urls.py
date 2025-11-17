from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path("api/doctors", include("Doctors.urls")),
    path("api/dieases", include("Dieases.urls")),
    path("api/patients", include("Patients.urls")),
    path("admin/", admin.site.urls),
]
