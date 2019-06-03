using Microsoft.Owin.Hosting;
using System;
using System.Windows.Forms;

namespace Overwolf.Pubg
{
    static class Program
    {
        /// <summary>
        /// Punto de entrada principal para la aplicación.
        /// </summary>
        [STAThread]
        static void Main()
        {
            StartWebApp();

            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Main());
        }

        static void StartWebApp()
        {
            string url = "http://localhost:9000";
            WebApp.Start(url);
        }
    }
}
