﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.FinalnyjjProekt
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Организации.
    /// </summary>
    // *** Start programmer edit section *** (Организации CustomAttributes)

    // *** End programmer edit section *** (Организации CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОрганизацииE", new string[] {
            "Код as \'Код\'",
            "Название as \'Название\'"})]
    [View("ОрганизацииL", new string[] {
            "Код as \'Код\'",
            "Название as \'Название\'"})]
    public class Организации : ICSSoft.STORMNET.DataObject
    {
        
        private int fКод;
        
        private string fНазвание;
        
        // *** Start programmer edit section *** (Организации CustomMembers)

        // *** End programmer edit section *** (Организации CustomMembers)

        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (Организации.Код CustomAttributes)

        // *** End programmer edit section *** (Организации.Код CustomAttributes)
        [NotNull()]
        public virtual int Код
        {
            get
            {
                // *** Start programmer edit section *** (Организации.Код Get start)

                // *** End programmer edit section *** (Организации.Код Get start)
                int result = this.fКод;
                // *** Start programmer edit section *** (Организации.Код Get end)

                // *** End programmer edit section *** (Организации.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Организации.Код Set start)

                // *** End programmer edit section *** (Организации.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (Организации.Код Set end)

                // *** End programmer edit section *** (Организации.Код Set end)
            }
        }
        
        /// <summary>
        /// Название.
        /// </summary>
        // *** Start programmer edit section *** (Организации.Название CustomAttributes)

        // *** End programmer edit section *** (Организации.Название CustomAttributes)
        [StrLen(255)]
        public virtual string Название
        {
            get
            {
                // *** Start programmer edit section *** (Организации.Название Get start)

                // *** End programmer edit section *** (Организации.Название Get start)
                string result = this.fНазвание;
                // *** Start programmer edit section *** (Организации.Название Get end)

                // *** End programmer edit section *** (Организации.Название Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Организации.Название Set start)

                // *** End programmer edit section *** (Организации.Название Set start)
                this.fНазвание = value;
                // *** Start programmer edit section *** (Организации.Название Set end)

                // *** End programmer edit section *** (Организации.Название Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОрганизацииE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОрганизацииE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОрганизацииE", typeof(IIS.FinalnyjjProekt.Организации));
                }
            }
            
            /// <summary>
            /// "ОрганизацииL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОрганизацииL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОрганизацииL", typeof(IIS.FinalnyjjProekt.Организации));
                }
            }
        }
    }
}
