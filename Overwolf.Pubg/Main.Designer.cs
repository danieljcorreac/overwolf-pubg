namespace Overwolf.Pubg
{
    partial class Main
    {
        /// <summary>
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.WebBrowser = new CefSharp.WinForms.ChromiumWebBrowser("http://localhost:9000/");
            this.SuspendLayout();
            // 
            // WebBrowser
            // 
            this.WebBrowser.BackColor = System.Drawing.Color.White;
            this.WebBrowser.Dock = System.Windows.Forms.DockStyle.None;
            this.WebBrowser.Location = new System.Drawing.Point(0, 0);
            this.WebBrowser.MinimumSize = new System.Drawing.Size(0, 0);
            this.WebBrowser.Name = "WebBrowser";
            this.WebBrowser.Size = new System.Drawing.Size(0, 0);
            this.WebBrowser.TabIndex = 0;
            //this.WebBrowser.Visible = false;
            // 
            // Main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(774, 526);
            this.Controls.Add(this.WebBrowser);
            this.Name = "Main";
            this.Text = "Pubg";
            this.ResumeLayout(false);

        }

        #endregion

        private CefSharp.WinForms.ChromiumWebBrowser WebBrowser;
    }
}

