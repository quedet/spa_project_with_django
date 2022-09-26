from channels.generic.websocket import JsonWebsocketConsumer

class ExampleConsumer(JsonWebsocketConsumer):
    def connect(self):
        """
        Event when client connects
        """
        # Accept the connection
        self.accept()
    
    def disconnect(self, close_code):
        """
        Event when client disconnects
        """
        pass
    