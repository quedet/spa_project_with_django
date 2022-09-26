from asgiref.sync import async_to_sync
from django.template.loader import render_to_string
from django.urls import reverse
from datetime import datetime
from django.utils import timezone

from app_template.forms import LoginForm, SignupForm

def send_page(self, page):
    """Render HTML and send page to client"""
    # Prepare context data for page
    context = {}
    
    match page:
        case "login":
            context = {"form": LoginForm }
        case "signup": 
            context = {"form": SignupForm }
            
    context.update({"active_nav": page})
    
    # Render HTML nav and send to client
    self.send_html({
        "selector": "#nav",
        "html": render_to_string("components/_nav.html", context),
    })
    
    # Render HTML page and send to client
    self.send_html({
        "selector": "#main",
        "html": render_to_string(f"pages/{page}.html", context),
        "url": reverse(page)
    })
    
def add_lap(self):
    """Add lap to home page"""
    # Send current time to client
    # print(datetime.strftime(timezone.now(), "h:i:s"))
    d = timezone.now()
    
    self.send_html({
        "selector": "#laps",
        "html": render_to_string("components/_lap.html", {
            "time": timezone.localtime(d).strftime("%H:%M:%S"), 
        }),
        "append": True
    })