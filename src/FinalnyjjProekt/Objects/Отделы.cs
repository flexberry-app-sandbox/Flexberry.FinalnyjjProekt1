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
    /// Отделы.
    /// </summary>
    // *** Start programmer edit section *** (Отделы CustomAttributes)

    // *** End programmer edit section *** (Отделы CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОтделыE", new string[] {
            "Код as \'Код\'",
            "Наименование as \'Наименование\'",
            "Организации as \'Организации\'",
            "Организации.Название as \'Название\'"}, Hidden=new string[] {
            "Организации.Название"})]
    [MasterViewDefineAttribute("ОтделыE", "Организации", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Название")]
    [View("ОтделыL", new string[] {
            "Код as \'Код\'",
            "Наименование as \'Наименование\'",
            "Организации.Название as \'Название\'"})]
    public class Отделы : ICSSoft.STORMNET.DataObject
    {
        
        private int fКод;
        
        private string fНаименование;
        
        private IIS.FinalnyjjProekt.Организации fОрганизации;
        
        // *** Start programmer edit section *** (Отделы CustomMembers)

        // *** End programmer edit section *** (Отделы CustomMembers)

        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (Отделы.Код CustomAttributes)

        // *** End programmer edit section *** (Отделы.Код CustomAttributes)
        [NotNull()]
        public virtual int Код
        {
            get
            {
                // *** Start programmer edit section *** (Отделы.Код Get start)

                // *** End programmer edit section *** (Отделы.Код Get start)
                int result = this.fКод;
                // *** Start programmer edit section *** (Отделы.Код Get end)

                // *** End programmer edit section *** (Отделы.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Отделы.Код Set start)

                // *** End programmer edit section *** (Отделы.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (Отделы.Код Set end)

                // *** End programmer edit section *** (Отделы.Код Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Отделы.Наименование CustomAttributes)

        // *** End programmer edit section *** (Отделы.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Отделы.Наименование Get start)

                // *** End programmer edit section *** (Отделы.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Отделы.Наименование Get end)

                // *** End programmer edit section *** (Отделы.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Отделы.Наименование Set start)

                // *** End programmer edit section *** (Отделы.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Отделы.Наименование Set end)

                // *** End programmer edit section *** (Отделы.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Отделы.
        /// </summary>
        // *** Start programmer edit section *** (Отделы.Организации CustomAttributes)

        // *** End programmer edit section *** (Отделы.Организации CustomAttributes)
        [PropertyStorage(new string[] {
                "Организации"})]
        [NotNull()]
        public virtual IIS.FinalnyjjProekt.Организации Организации
        {
            get
            {
                // *** Start programmer edit section *** (Отделы.Организации Get start)

                // *** End programmer edit section *** (Отделы.Организации Get start)
                IIS.FinalnyjjProekt.Организации result = this.fОрганизации;
                // *** Start programmer edit section *** (Отделы.Организации Get end)

                // *** End programmer edit section *** (Отделы.Организации Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Отделы.Организации Set start)

                // *** End programmer edit section *** (Отделы.Организации Set start)
                this.fОрганизации = value;
                // *** Start programmer edit section *** (Отделы.Организации Set end)

                // *** End programmer edit section *** (Отделы.Организации Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОтделыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтделыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтделыE", typeof(IIS.FinalnyjjProekt.Отделы));
                }
            }
            
            /// <summary>
            /// "ОтделыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтделыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтделыL", typeof(IIS.FinalnyjjProekt.Отделы));
                }
            }
        }
    }
}
