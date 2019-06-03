using Microsoft.AspNet.SignalR;
using System;

namespace Overwolf.Pubg
{
    public class OverwolfHub : Hub
    {
        public void SendData(object data)
        {
            //Console.Write(data);
            //Clients.All.message(data);
        }
    }
}
