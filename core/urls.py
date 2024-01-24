from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_login, name='login'), 
    path('index', views.index, name='index'),
    path('login', views.user_login, name='login'),  
    path('signup', views.user_signup, name='signup'),  
    path('logout', views.user_logout, name='logout'),  
    path('movie/<str:pk>/', views.movie, name='movie'),
    path('genre/<str:pk>/', views.genre, name='genre'),
    path('my-list', views.my_list, name='my-list'),
    path('add-to-list', views.add_to_list, name='add-to-list'),
    path('search', views.search, name='search'),
    path('movie.html', views.movie_html, name='movie_html'),
]
